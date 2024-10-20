let mock: any
mock = [
        {"month": "07-2024", "kWh": 120 , "amount": 20   },
        {"month": "06-2024", "kWh": 100 , "amount": 30  },
        {"month": "08-2024", "kWh": 122 , "amount": 50  }
]

const chartEntities: ChartEntity[] = mock;//[];


async function getChart(): Promise<ChartEntity[]> {
    return new Promise((resolve, reject) => {
        return resolve(chartEntities);
    })
}

export default {
    getChart,
}
