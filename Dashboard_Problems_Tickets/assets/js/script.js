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

                    }
                }
            }
        }
    })
}