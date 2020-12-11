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
        initObject.body = JSON.stringify(payload.data);
    }

    if (payload.method) {
        initObject.method = payload.method;
    }

    return initObject;
};

export const fetch = function<TRes extends {}>(url: string, payload: FetchPayload): Promise<TRes> {
    return window.fetch(`${apiHost}${url}`, getInitObject(payload))
        .then((response) => {
            return response.json().then((data: TRes) => {
                if (response.ok) {
                    return data;
                } else {
                    return Promise.reject(data);
                }
            });
        })
        .catch((error) => {
            console.error(error);
            throw error;
        });
};
