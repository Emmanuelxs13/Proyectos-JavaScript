document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('switch-mode');

    modeSwitch.addEventListener('click', function () {
        document.documentElement.classList.toggle('dark');
        modeSwitch.classList.toggle('active');
    });

    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectList = document.querySelector('request-boxes');

    listView.addEventListener('click', function () {
        gridView.classList.remove('active');
        listView.classList.add('active');
        projectList.classList.remove('change-mode');
        projectList.classList.add('jsListView');
    });

    gridView.addEventListener('click', function () {
        gridView.classList.add('active');
        listView.classList.remove('active');
        projectList.classList.remove('jsListView');
        projectList.classList.add('change-mode');
    });

    document.querySelector('.service-btn').addEventListener('click', function () {
        document.querySelector('.data-section').classList.add('show');
    });

    document.querySelector('.data-close').addEventListener('click', function () {
        document.querySelector('.data-section').classList.remove('show');
    });

    document.querySelector('.spen-side').addEventListener('click', function () {
        document.querySelector('.sidebar').classList.add('show');
        document.querySelector('.close-side').classList.add('show');
    });

    document.querySelector('.close-side').addEventListener('click', function () {
        document.querySelector('.sidebar').classList.remove('show');
        document.querySelector('.close-side').classList.remove('show');
    });
})


function createBarChart (ctx, data) {
    new CharacterData(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' ,'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Expense',
                data: data,
                borderWidth: 1,
                borderRadius: 30,
                barThickness: 12,
                backgroundColor: ['#66b2f0'],
                borderColor: ['#111111'],
                hoverBackgroundColor: ['#0f5085'],
                hoverBorderColor: ['#111111'],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => `${value}TB`,
                        stepSize: 5,
                    },
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 12,
                            family: "'plus Jakarta Sans', sans-serif",
                            lineHeight: 18,
                            weight: 600
                        }
                    }
                }
            }
        }
    });
}

const ctx1 = document.getElementById('myChart');
createBarChart(ctx1,[11, 3, 14, 7, 4, 15, 7, 9, 15, 13, 7, 14]);

const ctx2 = document.getElementById('myChart2');
createBarChart(ctx2,[10, 2, 13, 6, 3, 13, 6, 7, 12, 11, 6, 11]);

$(function () {
    var desiredPercentage = 70;
    var containerWith = $('.box').width();
    var size = (desiredPercentage / 100) * containerWith;

    $('.chart').easyPieChart({
        size: size,
        barColor: "#66b2f0",
        scaleLength: 0,
        lineWidth: 11,
        trackColor:"#c8c8c8",
        lineCap: "circle",
        animate: 2000,
    });
});