export const treeMap = {
    options: {
        legend: {
            show: false
        },
        title: {
            text: `Monthly sale of Iphone's in INDIA, 2023`,
            align: 'center'
        },
        colors: [
            '#cda5ff',
            '#92c3fa',
            '#ADD8C7',
            '#EC3C65',
            '#CDD7B6',
            '#C1F666',
            '#D43F97',
            '#1E5D8C',
            '#421243'
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        }
    },
    series: [{
        data: [
            {
                x: 'Iphone Sale in Mar',
                y: 12000
            },
            {
                x: 'Iphone Sale in Apr',
                y: 8000
            },
            {
                x: 'Iphone Sale in May',
                y: 4000
            },
            {
                x: 'Iphone Sale in Jun',
                y: 15000
            },
            {
                x: 'Iphone Sale in Jul',
                y: 8000
            },
            {
                x: 'Iphone Sale in Aug',
                y: 10000
            },
            {
                x: 'Iphone Sale in Sep',
                y: 8000
            },
            {
                x: 'Iphone Sale in Oct',
                y: 10000
            },
            {
                x: 'Iphone Sale in Nov',
                y: 10000
            },
        ]
    }],
    chart: {
        toolbar: {
            show: true,
        },
    },
}