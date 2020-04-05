export {}

if(!String.prototype.hasOwnProperty('contains')) {
    String.prototype.contains = function (value: string): boolean {
        const treatedString = this.toLowerCase().allTrim();
        const treatedValue = value.toLowerCase().allTrim();
        return treatedString.indexOf(treatedValue) >= 0;
    }
}

if(!String.prototype.hasOwnProperty('allTrim')) {
    String.prototype.allTrim = function(): string {
        return this.replace(/\s+/g,' ')
            .replace(/^\s+|\s+$/,'');
    }
}