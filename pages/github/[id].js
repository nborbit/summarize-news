import * as React from "react";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {html} from "htl";
import { promises as fs } from 'fs';
import path from 'path'

function drawChart2(divElement, data) {
    const plot = Plot.plot({
        padding: 0.15, 
        width: 1050,
        height: 200,
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 50,
        x: { tickRotate: -45, label: null },
        y: { axis: null },
        marks: [
            Plot.barY(data, {
                x: "payload__pull_request__head__repo__language", 
                y: "count", 
                sort: {x: "y", reverse: true, grid: true}, 
                fill: "rgb(70, 130, 180)",
                rx: 3
            }),
            Plot.text(data, {
                x: "payload__pull_request__head__repo__language",
                y: "count",
                text: "count",
                title: t => `${t.count}-${t.payload__pull_request__head__repo__language}`,
                dy: -5
            })
        ]}
    );
    divElement.current.appendChild(plot);
}

function drawChart(divElement, data) {
    const plot = Plot.plot({
        height: 2000, 
        width: 350, 
        padding: 0.15, 
        marginRight: 125,
        x: { axis: null },
        y: { axis: null },
        marks: [
            Plot.barX(data, {
                x: "count", 
                y: "repo__name", 
                sort: {y: "x", reverse: true, grid: true}, 
                fill: "rgb(70, 130, 180)",
                rx: 3}),
            ,
            Plot.text(data, {
                x: "count",
                y: "repo__name",
                text: "repo__name",
                textAnchor: "start",                
                dx: 6}),
            Plot.text(data, {
                x: "count",
                y: "repo__name",
                text: "count",
                fill: "white",
                textAnchor: "end",
                dx: -3,
            })
        ]}
    );
    d3.select(plot).selectAll("text").each(function () {
        const textElement = d3.select(this)
        const path = textElement.text();
        textElement.classed("has-link", true)

        textElement.on("click", function() {
            window.open('https://github.com/'+ path);
        });
    });
    const style = html`<style>
      .has-link {
       cursor: pointer; 
       pointer-events: all;
      }
      .has-link:hover {
        text-decoration: underline;
      }
    </style>`;
    plot.appendChild(style);
    divElement.current.appendChild(plot);
  }

function GithubChart(props) {
    const divElement = React.useRef(null);
    React.useEffect(() => {
        drawChart(divElement, props.data);
      }, [divElement]);
    
      return (
        <div ref={divElement}/>
      );
}

function GithubChartLanguages(props) {
    const divElement = React.useRef(null);
    React.useEffect(() => {
        drawChart2(divElement, props.data);
      }, [divElement]);
    
      return (
        <div ref={divElement}/>
      );
}

export async function getStaticPaths() {
    const dataDirectory = path.join(process.cwd(), 'data', 'github');
    const files = await fs.readdir(dataDirectory)

    return {
      paths: files.map(fname =>  ({ params: { id: fname.replace('.json','') } })),
      fallback: false,
    }
  }

  
export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'data', 'github', `${params.id}.json`)
    const fileContents = await fs.readFile(filePath, 'utf8');
    return {
        props: {
            data: JSON.parse(fileContents)
        }
    }
}
  
const Github = ({data}) => {
    return (  
        <main>
            <h1 class="text-6xl p-3 font-extrabold">
                <b>summ</b>arize<b>.news</b>
            </h1>
            <h2 class="text-xl  p-3 ">
                Github summary for {data.date}
            </h2>
            <div class="w-full p-3 text-sm">
                <div>Pull requests per language</div>
                <GithubChartLanguages data={data.topLanguages}/>
            </div>
            <div class="flex flex-row p-3 h-screen">
                <div class="flex flex-col p-1">
                    <div class="text-sm whitespace-nowrap">Top 100 starred repositories</div>
                    <GithubChart data={data.topStarred} class="overflow-y-auto"/>
                </div>
                <div class="flex flex-col p-1">
                    <div class="text-sm whitespace-nowrap">Top 100 total stars</div>
                    <GithubChart data={data.topStarredActive} class="overflow-y-auto"/>
                </div>
                <div class="flex flex-col p-1">
                    <div class="text-sm whitespace-nowrap">Pull requests per repository</div>
                    <GithubChart data={data.topPullRequests} class="overflow-y-auto"/>
                </div>
            </div>
        </main>
      );
};

export default Github;