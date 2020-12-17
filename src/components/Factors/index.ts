import { Factors } from './Factors';
import { Group, Category, Factor } from './types';
import { FactorClickHandler, RenderGroup, RenderCategory, RenderFactor } from './Factors.types';
import { RenderProp } from 'hooks/useRenderProp';

type _RenderGroup = RenderProp<RenderGroup>;
type _RenderCategory = RenderProp<RenderCategory>;
type _RenderFactor = RenderProp<RenderFactor>;

export * from './hocs';
export * from './hooks';
export {
    Group,
    Category,
    Factor,
    FactorClickHandler,
    _RenderGroup as RenderGroup,
    _RenderCategory as RenderCategory,
    _RenderFactor as RenderFactor,
};
export default Factors;
