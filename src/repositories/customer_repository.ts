let mock: any
mock = [
    {
    "id": 1,
    "name": "Bruno Britots ",
    "active": true
},
]

const customers: CustomerEntity[] = mock;//[];


async function getCustomer(id: number): Promise<CustomerEntity | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(customers.find(c => c.id === id));
    })
}

async function getCustomers(): Promise<CustomerEntity[]> {
    return new Promise((resolve, reject) => {
        return resolve(customers);
    })
}


async function addCustomer(customer: CustomerEntity): Promise<CustomerEntity> {
    return new Promise((resolve, reject) => {
        if (!customer.name || !customer.cpf)
            return reject(new Error(`Invalid customer.`));

        const newCustomer = new CustomerEntity(customer.name, customer.cpf);
        customers.push(newCustomer);

        return resolve(newCustomer);
    })
}

async function updateCustomer(id: number, newCustomer: CustomerEntity): Promise<CustomerEntity | undefined> {
    return new Promise((resolve, reject) => {
        const index = customers.findIndex(c => c.id === id);
        if (index >= 0) {
            if (newCustomer.name && customers[index].name !== newCustomer.name)
                customers[index].name = newCustomer.name;

            if (newCustomer.cpf && customers[index].cpf !== newCustomer.cpf)
                customers[index].cpf = newCustomer.cpf;

            return resolve(customers[index]);
        }

        return resolve(undefined);
    })
}

async function deleteCustomer(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const index = customers.findIndex(c => c.id === id);
        if (index >= 0) {
            customers.splice(index, 1);
            return resolve(true);
        }

        return resolve(false);
    })
}

export default {
    getCustomer,
    getCustomers,
    deleteCustomer,
    addCustomer,
    updateCustomer
}
