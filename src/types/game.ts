export type Gender = 'female' | 'male';
export type FemaleStyle = 'hijab' | 'non-hijab';
export type MaleStyle = 'glasses' | 'non-glasses';
export type GameMode = 'practice' | 'exam';
export type AppScreen = 'splash' | 'login' | 'signup' | 'locker' | 'menu' | 'skp_game' | 'word_search' | 'result';

export interface PlayerAvatar {
    gender: Gender;
    style: FemaleStyle | MaleStyle;
}

export interface PlayerAccount {
    nim: string;
    username: string;
    avatar?: PlayerAvatar;
    highScore: number;
    completedSKP: number[]; // Index 1-7
    completedSubLevels: string[]; // Format: ["1-1", "1-2"]
}

export type Language = 'id' | 'en' | 'th';

export interface SKPQuestion {
    id: string;
    question: string;
    questionEn?: string;
    questionTh?: string;
    options: string[];
    optionsEn?: string[];
    optionsTh?: string[];
    correctAnswer: number;
    explanation: string;
    explanationEn?: string;
    explanationTh?: string;
}

export interface SBARItem {
    category: 'S' | 'B' | 'A' | 'R';
    text: string;
    textEn?: string;
    textTh?: string;
}

export interface DrugItem {
    id: string;
    name: string;
    type: 'high_alert' | 'lasa';
    dosage: string;
    dosageEn?: string;
    dosageTh?: string;
}

export interface SKPSubLevel {
    id: number;
    title: string;
    titleEn?: string;
    titleTh?: string;
    subtitle: string;
    subtitleEn?: string;
    subtitleTh?: string;
    patientName?: string;
    patientNameEn?: string;
    patientNameTh?: string;
    patientInfo?: string;
    patientInfoEn?: string;
    patientInfoTh?: string;
    type: 'dialog_choice' | 'sbar_builder' | 'drug_sorting' | 'stage_analysis' | 'sequence_order' | 'assessment_tool';
    introDialog: string;
    introDialogEn?: string;
    introDialogTh?: string;
    questions?: SKPQuestion[];
    sbarData?: {
        correctOrder: SBARItem[];
        options: SBARItem[];
    };
    drugs?: DrugItem[];
    sequenceData?: {
        steps: string[];
        stepsEn?: string[];
        stepsTh?: string[];
        correctOrder: number[];
    };
}

export interface SKPModuleData {
    id: number;
    title: string;
    titleEn?: string;
    titleTh?: string;
    subtitle: string;
    subtitleEn?: string;
    subtitleTh?: string;
    sceneBg: string;
    subLevels: SKPSubLevel[];
}

export interface SKPResult {
    skpId: number;
    subLevelId?: number;
    isCorrect: boolean;
    score: number;
    stars: number;
}