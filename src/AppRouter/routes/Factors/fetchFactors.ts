import { Group } from 'components/Factors';

interface FetchUpsaleRequest {
    accountId: number;
    issueId?: number;
    chatId?: number;
}

interface FetchUpsaleResponse {
    factors: Record<string, string>;
    factorsForOffer: [];
}

const fetchUpsale = (data: FetchUpsaleRequest): Promise<FetchUpsaleResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                factors: {},
                factorsForOffer: [],
            });
        }, 2000);
    });
};

const adaptResponse = (response: FetchUpsaleResponse): Group[] => {
    return [];
};

const fetchFactors = <T extends FetchUpsaleRequest>(data: T): Promise<Group[]> => {
    return fetchUpsale(data).then(adaptResponse);
};

export { fetchFactors };
