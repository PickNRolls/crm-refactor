import React, { FC, useEffect, useState } from 'react';
import PureFactors, {
    Factor,
    Group,
    Category,
    FactorClickHandler,
    withOverlay,
    withCopyButtons,
    withSaveButton,
    withCancelButton,
    withMountLoad,
    withSelfContent,
    withNoContentTooltip,
} from 'components/Factors';
import { FactorsProps } from './Factors.types';

const Factors =
    withMountLoad(
    withCopyButtons(
    withOverlay(
    withCancelButton(
    withSaveButton(
    withSelfContent(
    withNoContentTooltip(
        PureFactors
    )))))));

type NormalizedGroup = Omit<Group, 'categories'> & {
    categoryIds: string[];
};

type NormalizedCategory = Omit<Category, 'factors'> & {
    factorIds: string[];
};

const IssueFactors: FC<FactorsProps> = props => {
    const [isDraftSaving, setIsDraftSaving] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const handleFactorClick: FactorClickHandler = (value) => {
        console.log(value);
        setIsDraftSaving(true);
        setTimeout(() => {
            setIsDraftSaving(false);
        }, 200);
    };

    const handleFactorsCancel = () => {
        console.log('cancel');
    };

    const handleFactorsSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
        }, 1000);
    };

    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(isSaving || isDraftSaving);
    }, [isSaving, isDraftSaving]);

    const renderSaveButton = (parentRender) => (renderProps) => {
        return (
            <>
                {parentRender({
                    ...renderProps,
                    disabled: isLoading,
                })}
            </>
        );
    };

    const handleMountLoad = (): Promise<Group[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(groups)
            }, 3000);
        });
    };

    return (
        <Factors
            onMountLoad={handleMountLoad}
            onFactorClick={handleFactorClick}

            canSave
            renderSaveButton={renderSaveButton}
            onSave={handleFactorsSave}

            canCancel
            onCancel={handleFactorsCancel}

            isOverlayVisible={isLoading}
        />
    );
};

export { IssueFactors };
