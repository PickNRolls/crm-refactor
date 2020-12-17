import React, { FC, useState } from 'react';
import PureFactors, {
    Factor,
    Group,
    Category,
    FactorClickHandler,
    useDraftSave,
    withOverlay,
    withCopyButtons,
} from 'components/Factors';
import { FactorsProps, MoveFactor } from './Factors.types';

const Factors = withCopyButtons(withOverlay(PureFactors));

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
    })

    const moveFactor: MoveFactor = (source, dest) => {
        const { factorId, categoryId } = source;
        const destCategoryId = dest.categoryId;
        
        if (!destCategoryId) {
            return;
        }

        setCategoryMap({
            ...categoryMap,
            [categoryId]: {
                ...categoryMap[categoryId],
                factorIds: categoryMap[categoryId].factorIds.filter((fId) => fId !== factorId),
            },
            [destCategoryId]: {
                ...categoryMap[destCategoryId],
                factorIds: categoryMap[destCategoryId].factorIds.concat(factorId),
            },
        });
        
    };  

    const handleFactorClick: FactorClickHandler = async (value) => {
        const response = await saveDraft(value);
        console.log(response);
    };

    return (
        <>
            <Factors
                factorGroups={groups}
                onFactorClick={handleFactorClick}
            />
        </>
    );
};

export { IssueFactors };
