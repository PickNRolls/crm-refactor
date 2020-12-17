const apiHost = 'http://localhost:8000';

interface FetchPayload {
    method?: string;
    data?: any;
}

const getInitObject = (payload: FetchPayload): RequestInit => {
    const initObject: RequestInit = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    };

    if (payload.data) {
        initObject.body = JSON.stringify({
            data: payload.data,
        });
    }

    if (payload.method) {
        initObject.method = payload.method;
    }

    return initObject;
};

export const fetch = function<TRes extends {}>(url: string, payload: FetchPayload): Promise<TRes> {
    return window.fetch(`${apiHost}${url}`, getInitObject(payload))
        .then((response) => {
            return response.json().then((res: TRes) => {
                if (response.ok) {
                    return res;
                } else {
                    return Promise.reject(res);
                }
            });
        })
        .catch((res) => {
            console.error(res);
            throw res;
        });
};
