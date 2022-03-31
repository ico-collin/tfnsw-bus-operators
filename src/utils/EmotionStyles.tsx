import { CreateEmotionStyles } from "../contracts/types";

const createStyles = <T extends CreateEmotionStyles>(arg: T): T => arg;

export default createStyles;
