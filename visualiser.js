const getDefaultFontSize = () => {
    const element = document.createElement('div');
    element.style.width = '1rem';
    element.style.display = 'none';
    document.body.append(element);

    const widthMatch = window
        .getComputedStyle(element)
        .getPropertyValue('width')
        .match(/^(\d*\.?\d*)px$/);

    element.remove();

    if (!widthMatch || widthMatch.length < 1) {
        return null;
    }

    const result = Number(widthMatch[1]);
    return !isNaN(result) ? result / 0.625 : null;
};

var totalNumberOfProblems = document.getElementsByClassName('problems')[0].getElementsByTagName('tr').length - 1

var totalAcceptedProblems = document.getElementsByClassName('problems')[0].getElementsByClassName('accepted-problem').length

var totalRejectedProblems = document.getElementsByClassName('problems')[0].getElementsByClassName('rejected-problem').length

var totalUnsolvedProblems = totalNumberOfProblems - totalRejectedProblems - totalAcceptedProblems

var defaultFontSize = getDefaultFontSize()

analysisResult=`
<canvas id="myChart" style="width:100%;max-width:600px;"></canvas>
`
sideBar = document.getElementById('sidebar')
sideBar.insertAdjacentHTML('beforeend',analysisResult)

var xValues = ["Accepted", "Rejected", "Unsolved"];
var yValues = [totalAcceptedProblems, totalRejectedProblems, totalUnsolvedProblems];
var barColors = [
  "#66ff66",
  "#ff3333",
  "#a3a3c2"
];

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: xValues,
        datasets: [{
            data: yValues,
            backgroundColor: barColors,
            borderColor:'#d4d2cf',
            borderWidth: 1.2
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontSize: 0.8*defaultFontSize,
                fontStyle: "bolder",
                fontColor: "#0099ff"
            }
        },
        title: {
            display: true,
            text: "Progress",
            fontSize: 1.1*defaultFontSize,
            fontColor: "#cccc00"
        },
        aspectRatio:0.875

    }
});
