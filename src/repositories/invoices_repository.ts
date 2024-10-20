let mock: any = [
    {
        "uc_number": 1,
        "customer_name": "Bruno Britots ",
        "supplier": 'Sir Jones',
        "february": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "march": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "april": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "may": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "june": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "july": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "august": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "september": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "october": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "november": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "December": "https://eppg.fgv.br/sites/default/files/teste.pdf",

    },
    {
        "uc_number": 2,
        "customer_name": "Alberto Britots ",
        "supplier": 'Maikon Mendes',
        "february": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "march": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "april": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "may": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "june": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "july": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "august": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "september": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "october": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "november": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "December": "https://eppg.fgv.br/sites/default/files/teste.pdf",

    },
    {
        "uc_number": 3,
        "customer_name": "Ana Fonseca Britots ",
        "supplier": 'Maikon Mendes',
        "february": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "march": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "april": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "may": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "june": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "july": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "august": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "september": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "october": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "november": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "December": "https://eppg.fgv.br/sites/default/files/teste.pdf",

    },
    {
        "uc_number": 4,
        "customer_name": "Noah Fonseca Britots ",
        "supplier": 'Beuno Mendes',
        "february": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "march": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "april": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "may": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "june": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "july": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "august": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "september": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "october": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "november": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "December": "https://eppg.fgv.br/sites/default/files/teste.pdf",

    },
    {
        "uc_number": 5,
        "customer_name": "Leandro Fonseca Britots ",
        "supplier": 'Charles Prox',
        "february": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "march": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "april": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "may": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "june": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "july": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "august": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "september": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "october": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "november": "https://eppg.fgv.br/sites/default/files/teste.pdf",
        "december": "https://eppg.fgv.br/sites/default/files/teste.pdf",

    },
]

const invoices: InvoiceEntity[] = mock;//[];


async function getInvoice(id: number): Promise<InvoiceEntity | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(invoices.find(c => c.uc_number === id));
    })
}

async function getInvoices(): Promise<InvoiceEntity[]> {
    return new Promise((resolve, reject) => {
        return resolve(invoices);
    })
}

export default {
    getInvoice,
    getInvoices,
}
