export type StringCase = 'uppercase' | 'lowercase' | 'titlecase'
export function changeCase(str: string = "", stringCase: StringCase = 'titlecase') {
    if (!str) return;
    const formattor: Record<StringCase, ((value: string) => string)> = {
        'lowercase': String.prototype.toLowerCase,
        'uppercase': String.prototype.toUpperCase,
        'titlecase': (_str) => _str.split(/[-_]/).map(el => el.at(0)?.toUpperCase() + el.substring(1,)).join(' '),
    };
    return formattor[stringCase]?.call(str, str);
}