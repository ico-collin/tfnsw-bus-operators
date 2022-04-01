import { CreateEmotionStyles } from '../contracts/types'

/**
 * Help to create jsx css class
 * @param arg -- css attributes
 */
const createStyles = <T extends CreateEmotionStyles>(arg: T): T => arg;

export default createStyles;
