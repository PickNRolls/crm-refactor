import React, { FC, useEffect, useState } from 'react';
import PureFactors, {
    Factor,
    Group,
    Category,
    FactorClickHandler,
    useDraftSave,
    withOverlay,
    withCopyButtons,
} from 'components/Factors';
import { compose } from 'utils/compose';
import { FactorsProps, MoveFactor } from './Factors.types';
import { withSaveButton } from 'components/Factors/hocs/withSaveButton';

const Factors = withOverlay(withSaveButton(PureFactors));

type NormalizedGroup = Omit<Group, 'categories'> & {
    categoryIds: string[];
};

type NormalizedCategory = Omit<Category, 'factors'> & {
    factorIds: string[];
};

const IssueFactors: FC<FactorsProps> = props => {
    const [saveDraft, isSaveDraftFetching] = useDraftSave();

    const [groupIds, setGroupIds] = useState<string[]>(['0', '1']);
    const [groupMap, setGroupMap] = useState<Record<string, NormalizedGroup>>({
        0: {
            id: '0',
            title: 'First group',
            categoryIds: ['0', '1'],
        },
        1: {
            id: '1',
            title: 'Second group',
            categoryIds: [],
        }
    });

    const categoryFactorMoveMap: Record<string, string> = {
        1: '0',
        0: '1',
    };

    const [categoryMap, setCategoryMap] = useState<Record<string, NormalizedCategory>>({
        0: {
            id: '0',
            title: '1 category',
            factorIds: ['0', '1', '2'],
        },
        1: {
            id: '1',
            title: '2 category',
            factorIds: ['3', '4', '5'],
        }
    });

    const [factorMap, setFactorsMap] = useState<Record<string, Factor>>({
        0: {
            id: '0',
            name: 'factor 1',
        },
        1: {
            id: '1',
            name: 'factor2',
        },
        2: {
            id: '2',
            name: 'factor3',
        },
        3: {
            id: '3',
            name: 'factor 1',
        },
        4: {
            id: '4',
            name: 'factor2',
        },
        5: {
            id: '5',
            name: 'factor3',
        },
    });

    const groups: Group[] = groupIds.map((groupId) => {
        const normalizedGroup = groupMap[groupId];
        const group: Group = {
            id: normalizedGroup.id,
            title: normalizedGroup.title,
            categories: normalizedGroup.categoryIds.map((categoryId) => {
                const normalizedCategory = categoryMap[categoryId];
                const category: Category = {
                    id: normalizedCategory.id,
                    title: normalizedCategory.title,
                    factors: normalizedCategory.factorIds.map((factorId) => factorMap[factorId]),
                };

                return category;
            }),
        };

        return group;
    });

    const [isDraftSaving, setIsDraftSaving] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);

    const handleFactorClick: FactorClickHandler = (value) => {
        console.log(value);
        setIsDraftSaving(true);
        setTimeout(() => {
            setIsDraftSaving(false);
        }, 200);
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

    return (
        <>
            <Factors
                factorGroups={groups}
                isOverlayVisible={isLoading}
                canSave
                onSave={handleFactorsSave}
                onFactorClick={handleFactorClick}
                renderSaveButton={renderSaveButton}
            />
        </>
    );
};

export { IssueFactors };
