"use strict";

export const getDomains = (chars = '', domains = []) => {
    let outDomains = [],
        enterDomain = chars.split('@')[1],
        validReg, reg;

    if (enterDomain || enterDomain == '') {
        validReg = enterDomain.replace(/[^.-a-z]/gim, '');
        reg = new RegExp(`^${validReg}`);

        domains.forEach(
            (domain) => {
                if (reg.test(domain)) {
                    outDomains.push(domain);
                }
            }
        );
    }

    return outDomains;
};

export const getEmailWithDomain = (value = '', domain = []) => {
    let username = value.split('@')[0];

    return `${username}@${domain}`;
};

export const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com", "aol.com", "msn.com"];