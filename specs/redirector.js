const assert = require('assert')

describe('Wambi pages', () => {
        const targetURL = "http://wambi.wp.cuberto.com";
        const arrayURI = [
            `${targetURL}/preview/`,
            `${targetURL}/preview/our-team/10-alex-coren?ml=1`,
            `${targetURL}/preview/our-team/8-rebecca-metter?ml=1`,
            `${targetURL}/preview/our-team/9-richard-coren?ml=1`,
            `${targetURL}/preview/our-team/11-david-jones?ml=1`,
            `${targetURL}/preview/our-team/19-dr-bonnie-clipper?ml=1`,
            `${targetURL}/preview/in-the-news/12-45-hospital-and-healthcare-executives-outline-the-hospital-of-the-future?ml=1`,
            `${targetURL}/preview/in-the-news/13-wambi-launches-carepostcard-a-digital-platform-for-caregiver-recognition-as-part-of-compassionate-care-movement?ml=1`,
            `${targetURL}/preview/in-the-news/14-wambi-co-founder-speaks-at-g20-young-entrepreneurs-alliance-summit-on-digital-trends-for-the-future-of-business?ml=1`,
            `${targetURL}.bamboohr.com/jobs/`,
            `${targetURL}/preview/wambi-blog`,
            `${targetURL}/preview/wambi-blog/employee-engagement`,
            `${targetURL}/preview/wambi-blog/employee-recognition-points-system`,
            `${targetURL}/preview/wambi-blog/improve-patient-satisfaction`,
            `${targetURL}/preview/wambi-blog/wambi-patient-engagement-solution`,
            `${targetURL}/preview/wambi-blog/care-provider-recognition`,
            `${targetURL}/preview/wambi-blog/recognition-platform`,
            `${targetURL}/preview/wambi-blog/healthcare-reward-system`,
            `${targetURL}/preview/wambi-blog/digital-recognition-platform`,
            `${targetURL}/preview/wambi-blog/provider-reimbursement`,
            `${targetURL}/preview/wambi-blog/hcahps-reimbursement`,
            `${targetURL}/preview/wambi-blog/real-time-patient-insights`,
            `${targetURL}/preview/wambi-blog/point-of-care-solution`,
            `${targetURL}/preview/wambi-blog/automated-recognition-system`,
            `${targetURL}/preview/wambi-blog/performance-reviews`,
            `${targetURL}/preview/wambi-blog/healthcare-recognition-platform`,
            `${targetURL}/preview/wambi-blog/healthcare-real-time`
        ]

        const arrayCompareURI = [
            `${targetURL}/`,
            `${targetURL}/company/`,
            `${targetURL}/company/`,
            `${targetURL}/company/`,
            `${targetURL}/company/`,
            `${targetURL}/company/`,
            `${targetURL}/news`,
            `${targetURL}/news`,
            `${targetURL}/news`,
            `${targetURL}/careers/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
            `${targetURL}/blog/`,
        ]

        arrayURI.forEach((item,index) => {
            it('should have the right url', () => {
                browser.url(item)
                browser.pause(2000);
                let uri = browser.getUrl();
                let assertURI = arrayCompareURI[index];
                assert.strictEqual(uri, assertURI);
            })
        })
})