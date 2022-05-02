import React, { useState, useEffect, useRef} from 'react'
import { csv, select, scaleLinear, scaleBand, bisector, scaleTime, extent, axisBottom, axisLeft, line, min, max } from 'd3'


function Chart({ data }) {
    const contRef = useRef(null) 

    useEffect(() => {
      console.log(data[7])
      const margin = { top: 20, right: 30, bottom: 40, left: 30 },
          width = 960 - margin.left - margin.right,
          height = 840 - margin.top - margin.bottom;
          
          
      const svg = select(contRef.current)
          .attr('viewBox', `0 0 ${width} ${height}`)
          // .attr('width', width + margin.left + margin.right)
          // .attr('height', height + margin.top + margin.bottom)
        .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      const xAccessor = d => d.time
      const yAccessor = d => d.open

      const x = scaleTime()
         .domain(extent(data, xAccessor))
         .range([0, width])

      const y = scaleLinear()
          .domain(extent(data, yAccessor))
          .range([height, 0])
          console.log(x.domain())

      svg.append('g').call(axisBottom(x)).attr('transform', `translate(0, ${height})`)
      svg.append('g').call(axisLeft(y))


      svg.selectAll()
        .data(data)
        .append('path')
        .attr("d", line()
                   .x(d => x(d.time)) 
                   .y(d => y(d.open)))
        .style("fill", "none")
        .style("stroke", "#CC0000")
        .style("stroke-width", "2");

      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => x(d.time))
            .attr("y", d=>  y(max([d.open, d.close])))
           .attr("height", d =>  y(min([d.open, d.close]))-y(max([d.open, d.close])))
          //  .attr("width", d=>  0.5 * (width - 2*margin.left)/data.length)

               .attr("fill", d=>  d.open > d.close ? "red" : "green");

      const focus = svg
      .append('g')
      .attr('class', 'focus')
      .style('display', 'none')

     const circle=  focus.append('circle').attr('r', 14.5).style('fill', 'white').attr('class', 'crosshair-circle');
    const lineX=   focus.append('line')
        .attr("x1", 0)
        .attr("x2", width)
        .attr("class", "xLine")
        .style("stroke-width", 2)
        .style("stroke", "white")
        .style("stroke-dasharray", 4)
        .style("fill", "none")
    //   .classed('x', true);

   const lineY= focus.append('line')
      .attr("y1", 0)
      .attr("y2", height)
      .attr("class", "yLine")
      .style("stroke-width", 2)
      .style("stroke", "white")
      .style("stroke-dasharray", 4)
      .style("fill", "none")

      svg.append('rect')
      .attr('class', 'overlay')
      .attr('height', height)
      .attr('width', width)
      .attr('fill', 'none')
      .on('mouseover', () => focus.style('display', null))
      .on('mouseout', () => focus.style('display', 'none'))
      .on('mousemove', (e) => {    
        focus.select('.yLine')          
        .attr('x1',e.pageX)
        .attr('x2', e.pageX)

        focus.select('.xLine')          
        .attr('y1', e.pageY)
        .attr('y2', e.pageY)

        focus.select('.crosshair-circle')
        .attr('cx', e.pageX)
        .attr('cy', e.pageY)
          
      })
      select('.overlay').style('fill', 'none');
      select('.overlay').style('pointer-events', 'all');
      

    }, [])
    

  return (
    <svg ref={contRef}></svg>
  )
}

export default Chart