const fs = require("fs");

let definitions;
let principlesConsent;
let principlesIndividualRights;
let principlesLegitmateProcessing;
let principlesObligations;

fs.readFile("../src/json/definitions.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  definitions = data;
});

fs.readFile("../src/json/principles_consent.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  principlesConsent = data;
});

fs.readFile("../src/json/principles_individual-rights.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  principlesIndividualRights = data;
});

fs.readFile("../src/json/principles_legitmate-processing.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  principlesLegitmateProcessing = data;
});

fs.readFile("../src/json/principles_obligations-of-data-connections.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  principlesObligations = data;
});

setTimeout(() => writeData(), 2000);

function writeData() {
  let json = [
    {
      "EU GDPR (2018)": {
        "name": "EU GDPR",
        "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679",
        "year": "2018",
        "categories": {}
      },
      "OECD Privacy Framework (2013)": {
        "name": "OECD Privacy Framework",
        "url": "https://www.oecd.org/internet/ieconomy/oecd_privacy_framework.pdf",
        "year": "2013",
        "categories": {}
      },
      "APEC Privacy Framework (2015)": {
        "name": "APEC Privacy Framework",
        "url": "https://www.apec.org/-/media/APEC/Publications/2005/12/APEC-Privacy-Framework/05_ecsg_privacyframewk.pdf",
        "year": "2015",
        "categories": {}
      },
      "AU Malabo Convention (2014)": {
        "name": "AU Malabo Convention",
        "url": "https://www.sbs.ox.ac.uk/cybersecurity-capacity/system/files/African%20Union%20Convention%20on%20CyberSecurity%20%26%20Personal%20Data%20Protection_0.pdf",
        "year": "2014",
        "categories": {}
      },
      "ASEAN Framework on Personal Data Protection (2016)": {
        "name": "ASEAN Framework on Personal Data Protection",
        "url": "https://asean.org/storage/2012/05/10-ASEAN-Framework-on-PDP.pdf",
        "year": "2016",
        "categories": {}
      },
      "OAS Principles on Privacy and Data Protection (2015)": {
        "name": "OAS Principles on Privacy and Data Protection",
        "url": "https://www.oas.org/en/sla/dil/docs/cji-doc_474-15_rev2.pdf",
        "year": "2015",
        "categories": {}
      },
      "UN Personal Data Protection and Privacy Principles (2018)": {
        "name": "UN Personal Data Protection and Privacy Principles",
        "url": "https://www.unsceb.org/CEBPublicFiles/UN-Principles-on-Personal-Data-Protection-Privacy-2018.pdf",
        "year": "2018",
        "categories": {}
      },
      "IAS": {
        "name": "RIPD Data Protection Standards of the Ibero-American States",
        "url": "https://iapp.org/media/pdf/resource_center/Ibero-Am_standards.pdf",
        "year": "-",
        "categories": {}
      },
      "Convention 108": {
        "name": "CoE Convention 108+",
        "url": "https://rm.coe.int/convention-108-convention-for-the-protection-of-individuals-with-regar/16808b36f1",
        "year": "-",
        "categories": {}
      },
      "Madrid Resolution": {
        "name": "ICDPPC Madrid Resolution",
        "url": "https://icdppc.org/wp-content/uploads/2015/02/The-Madrid-Resolution.pdf",
        "year": "-",
        "categories": {}
      }
    }
  ];

  for (const key of Object.keys(json[0])) {

    let defJson = JSON.parse(definitions)
    for (const frameworkData of defJson) {
      let categoryObj = {}
      if (frameworkData.Framework === key) {
        for (const k of Object.keys(frameworkData)) {
          let catKey = k.split('--')[0]
          if (k !== "Framework") {
            if (!Object.keys(categoryObj).includes(catKey)) {
              categoryObj[k] = { "abbreviated_language": frameworkData[k] }
            } else if (Object.keys(categoryObj).includes(catKey)) {

              categoryObj[catKey]["original_language"] = frameworkData[k]

              categoryObj[catKey]["has_data"] = true
            }
          }
        }
        json[0][key]["categories"] = categoryObj
      }
    }

    function helpWriteData(frameworkData) {
      let categoryObj = {}
      if (frameworkData.Framework === key) {
        for (const k of Object.keys(frameworkData)) {
          let catKey = k.split('--')[0]
          if (k !== "Framework") {
            if (!Object.keys(categoryObj).includes(catKey)) {
              categoryObj[k] = { "abbreviated_language": frameworkData[k] }
            } else if (Object.keys(categoryObj).includes(catKey)) {
              categoryObj[catKey]["original_language"] = frameworkData[k]
            }
          }
        }
        json[0][key]["categories"] = { ...json[0][key]["categories"], ...categoryObj }
      }
    }

    let consentJson = JSON.parse(principlesConsent)
    for (const frameworkData of consentJson) {
      helpWriteData(frameworkData)
    }

    let rightsJson = JSON.parse(principlesIndividualRights)
    for (const frameworkData of rightsJson) {
      helpWriteData(frameworkData)
    }

    let processingJson = JSON.parse(principlesLegitmateProcessing)
    for (const frameworkData of processingJson) {
      helpWriteData(frameworkData)
    }

    let obligationJson = JSON.parse(principlesObligations)
    for (const frameworkData of obligationJson) {
      helpWriteData(frameworkData)
    }

  }

  fs.writeFile("../src/json/framework_database.json", JSON.stringify(json), function (err) {
    if (err) {
      return console.log(err);
    }
  });

}
