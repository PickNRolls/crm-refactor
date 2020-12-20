import { fetchFactors } from './fetchFactors';

interface IssueFetchUpsaleRequest {
    accountId: number;
    issueId: number;
}

const fetchIssueFactors = (data: IssueFetchUpsaleRequest) => {
    return fetchFactors<IssueFetchUpsaleRequest>(data);
};

export { fetchIssueFactors };
