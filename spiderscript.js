
var hp1=41;

window.onload = function() {
    // sayfa72.html dosyasındaki getKarakter1Degeri fonksiyonunu çağırarak hp1 değişkenine atıyoruz
    hp1 = getKarakter1Degeri();

}

    const data = [
        {
            name: "Ortalama Kullanıcı",
            color: "hsl(325, 40%, 60%)",
            stats: {
                hp: 60,
                attack: 50,
                defense: 55,
                specialAttack: 70,
                specialDefense: 80,
                speed: 50
            }
        },
	{
		name: "Kullanıcı1",
		color: "hsl(200, 30%, 20%)",
		stats: {
			hp: 95,
			attack: 65,
			defense: 110,
			specialAttack: 60,
			specialDefense: 130,
			speed: 65
		}
	}
];

// aliases to describe the stats
const alias = {
	hp: "Hedef",
	attack: "Düşüş",
	defense: "Bütçe",
	specialAttack: "Çeşitlilik",
	specialDefense: "Risk",
	speed: "Yükseliş"
};

// unique properties
const statsKeys = data
	.map(({ stats }) => Object.keys(stats))
	.reduce((acc, curr) => {
		const keys = curr.filter((key) => !acc.includes(key));
		return [...acc, ...keys];
	}, []);

const statsValues = data
	.map(({ stats }) => Object.values(stats))
	.reduce((acc, curr) => [...acc, ...curr], []);

const maxStat = d3.max(statsValues);

const main = d3.select("main");
main.append("h1").text("Yatırımcı Profili");

const size = 500;
const margin = 40;
const radius = (size - margin) / 2;

const scaleAngle = d3
	.scalePoint()
	.domain([...statsKeys, ""])
	.range([0, Math.PI * 2]);

const scaleRadius = d3
	.scaleLinear()
	.domain([0, maxStat * 1.08])
	.range([0, radius])
	.nice();

const lineRadial = d3
	.lineRadial()
	.angle((d) => scaleAngle(d.stat))
	.radius((d) => scaleRadius(d.value))
	.curve(d3.curveLinearClosed);

main
	.append("svg")
	.attr("id", "spider-chart")
	.attr("viewBox", `-${size / 2} -${size / 2} ${size} ${size}`)
	.attr("width", size)
	.attr("height", size);

d3.select("#spider-chart").append("g").attr("class", "legend");

d3
	.select(".legend")
	.selectAll("g.label")
	.data(data.map(({ name, color }) => ({ name, color })))
	.enter()
	.append("g")
	.attr("class", "label")
	.attr("transform", (d, i) => `translate(${-radius} ${-radius + 25 * i})`);

d3
	.selectAll(".label")
	.append("text")
	.attr("x", 12)
	.attr("y", 6)
	.text((d) => d.name)
	.style("text-transform", "capitalize");

d3
	.selectAll(".label")
	.append("circle")
	.attr("r", 6)
	.attr("fill", (d) => d.color);

d3
	.select(".legend")
	.selectAll("g.axis")
	.data(statsKeys)
	.enter()
	.append("g")
	.attr("class", "axis")
	.style("opacity", 0.4);

d3
	.selectAll(".axis")
	.append("text")
	.text((d) => alias[d])
	.attr("fill", "currentColor")
	.attr("stroke", "none")
	.attr("font-size", 18)
	.style("text-transform", "uppercase")
	.attr("text-anchor", "middle")
	.attr("dominant-baseline", "middle")
	.attr(
		"transform",
		(d) =>
			`rotate(${
				(scaleAngle(d) * 180) / Math.PI
			}) translate(0 -${radius}) rotate(-${(scaleAngle(d) * 180) / Math.PI})`
	);

const ticks = 6;
const dataTicks = Array(ticks)
	.fill()
	.map((value, index, { length }) =>
		Math.round((maxStat / length) * (index + 1))
	);

d3
	.selectAll(".axis")
	.append("path")
	.attr("fill", "none")
	.attr("stroke", "currentColor")
	.attr("stroke-width", 1)
	.attr(
		"d",
		`M 0 -${scaleRadius(dataTicks[0])} V -${scaleRadius(
			dataTicks[dataTicks.length - 1]
		)}`
	)
	.attr("transform", (d) => `rotate(${(scaleAngle(d) * 180) / Math.PI})`);

d3.select(".legend").append("g").attr("class", "ticks").style("opacity", 0.3);

d3
	.select(".ticks")
	.selectAll("g.tick")
	.data(dataTicks)
	.enter()
	.append("g")
	.attr("class", "tick");

d3
	.selectAll(".tick")
	.append("text")
	.text((d) => d)
	.attr("x", "5")
	.attr("y", (d) => scaleRadius(d) * -1)
	.attr("font-size", 15);

d3
	.selectAll(".tick")
	.append("path")
	.attr("d", (d) => lineRadial(statsKeys.map((stat) => ({ stat, value: d }))))
	.attr("fill", "none")
	.attr("stroke", "currentColor")
	.attr("stroke-width", 1);

lineRadial.curve(d3.curveCatmullRomClosed);
data.forEach(({ color, stats }) => {
	const dataStats = Object.entries(stats).map(([stat, value]) => ({
		stat,
		value
	}));

	d3
		.select("#spider-chart")
		.append("path")
		.attr("d", lineRadial(dataStats))
		.attr("fill", "none")
		.attr("stroke", color)
		.attr("stroke-width", 5);

	d3
		.select("#spider-chart")
		.append("path")
		.attr("d", lineRadial(dataStats))
		.attr("fill", color)
		.attr("opacity", 0.25)
		.attr("stroke", "none");
});