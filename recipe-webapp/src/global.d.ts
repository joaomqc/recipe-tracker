export {}

declare global {
    interface String {
        contains(value: string): boolean;
        allTrim(): string;
    }
}