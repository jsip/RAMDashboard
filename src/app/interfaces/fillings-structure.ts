export interface FillingsStucture {
    addresses: {
        business: {
            city: string,
            stateOrCountry: string,
            stateOrCountryDescription: string,
            street1: string,
            street2: unknown,
            zipCode: string
        },
        mailing: {
            city: string,
            stateOrCountry: string,
            stateOrCountryDescription: string,
            street1: string,
            street2: unknown,
            zipCode: string
        }
    },
    category: string,
    cik: string,
    description: '',
    ein: string,
    entityType: string,
    exchanges: string[],
    filings: {
        files: string[],
        recent: {
            acceptanceDateTime: string[],
            accessionNumber: string[],
            act: string[],
            fileNumber: string[],
            filingDate: string[],
            filmNumber: string[],
            form: string[],
            isInlineXBRL: number[],
            isXBRL: number[],
            items: string[],
            primaryDocDescription: string[],
            primaryDocument: string[],
            reportDate: string[],
            size: number[]
        }
    },
    fiscalYearEnd: string,
    flags: string,
    formerNames: string[],
    insiderTransactionForIssuerExists: number,
    insiderTransactionForOwnerExists: number,
    investorWebsite: string,
    name: string,
    phone: string,
    sic: string,
    sicDescription: string,
    stateOfIncorporation: string,
    stateOfIncorporationDescription: string,
    tickers: string[],
    website: string
}