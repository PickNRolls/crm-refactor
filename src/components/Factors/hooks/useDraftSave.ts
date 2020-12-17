import { useState } from 'react';
import { FactorClickValue } from '../Factors.types';

type SaveDraft = (value: FactorClickValue) => Promise<unknown>

type UseDraftSaveReturn = [SaveDraft, boolean];

const useDraftSave = (): UseDraftSaveReturn => {
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const saveDraft: SaveDraft = (value) => {
        setIsFetching(true);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {},
                });
                setIsFetching(false);
            }, 800);
        });
    };

    return [saveDraft, isFetching];
};

export { useDraftSave };
