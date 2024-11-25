import{C as c}from"./useColors-Cz5tOQmp.js";import{u as t}from"./useTranslations-DN7QCs30.js";var i=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e))(i||{}),n=(e=>(e[e.None=0]="None",e[e.XY=1]="XY",e[e.Pie=2]="Pie",e[e.Heatmap=3]="Heatmap",e[e.Slider=4]="Slider",e[e.Gauge=5]="Gauge",e[e.ScoreCard=6]="ScoreCard",e[e.Table=7]="Table",e))(n||{}),u=(e=>(e[e.None=0]="None",e[e.SinglePlot=1]="SinglePlot",e[e.Model=2]="Model",e[e.Group=3]="Group",e[e.Location=4]="Location",e[e.Device=5]="Device",e))(u||{}),r=(e=>(e[e.None=0]="None",e[e.Sum=1]="Sum",e[e.Cardinal=2]="Cardinal",e[e.Mean=3]="Mean",e[e.Median=4]="Median",e[e.First=5]="First",e[e.Last=6]="Last",e[e.Difference=7]="Difference",e[e.Minimum=8]="Minimum",e[e.Maximum=9]="Maximum",e[e.Range=10]="Range",e))(r||{});const{$tr:a}=t(),m=e=>{switch(e){case i.None:return a("ui.common.none","None");case i.Organisation:return a("ui.chart-origin.custom","Custom");case i.OrganisationType:return a("ui.chart-origin.shared","Shared")}},d=e=>{switch(e){case i.None:return c.Error;case i.Organisation:return c.Primary;case i.OrganisationType:return c.Warning}},l=e=>{switch(e){case n.Gauge:return a("ui.chart-type.gauge","Gauge");case n.Heatmap:return a("ui.chart-type.heatmap","Heatmap");case n.Pie:return a("ui.chart-type.pie","Pie");case n.ScoreCard:return a("ui.chart-type.score-card","Score card");case n.Slider:return a("ui.chart-type.slider","Slider");case n.Table:return a("ui.chart-type.table","Table");case n.XY:return a("ui.chart-type.xy","XY");default:return a("ui.common.none","None")}},M=e=>{switch(e){case n.Gauge:return"mdi-gauge";case n.Heatmap:return"mdi-blur-linear";case n.Pie:return"mdi-chart-pie";case n.ScoreCard:return"mdi-counter";case n.Slider:return"mdi-ruler";case n.Table:return"mdi-table";case n.XY:return"mdi-chart-line";default:return a("ui.common.none","None")}},S=e=>{switch(e){case r.Sum:return a("ui.aggregation-type.sum","Sum");case r.Cardinal:return a("ui.aggregation-type.cardinal","Cardinal");case r.Mean:return a("ui.aggregation-type.mean","Mean");case r.Median:return a("ui.aggregation-type.median","Median");case r.First:return a("ui.aggregation-type.first","First");case r.Last:return a("ui.aggregation.last","Last");case r.Difference:return a("ui.aggregation-type.difference","Difference");case r.Minimum:return a("ui.common.minimum","Minimum");case r.Maximum:return a("ui.common.maximum","Maximum");case r.Range:return a("ui.aggregation-type.range","Range");default:return a("ui.aggregation-type.none","None")}},f=e=>{switch(e){case u.SinglePlot:return a("ui.plot-per.single-slot","Single slot");case u.Model:return a("ui.common.model","Model");case u.Group:return a("ui.common.group","Group");case u.Location:return a("ui.common.location","Location");case u.Device:return a("ui.common.device","Device");default:return a("ui.common.none","None")}};export{r as A,n as C,u as P,i as a,d as b,M as c,m as d,l as e,S as f,f as p};
