const fs = require("fs");

let frameworks;
let definitions;
let principlesConsent;
let principlesIndividualRights;
let principlesLegitmateProcessing;
let principlesObligations;

fs.readFile("../src/json/frameworks.json", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  frameworks = data;
});

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
        "Title": "EU GDPR",
        "Link": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679",
        "Year": "2018",
        "Categories": {}
      },
      "OECD Privacy Framework (2013)": {
        "Title": "OECD Privacy Framework",
        "Link": "https://www.oecd.org/internet/ieconomy/oecd_privacy_framework.pdf",
        "Year": "2013",
        "Categories": {}
      },
      "APEC Privacy Framework (2015)": {
        "Title": "APEC Privacy Framework",
        "Link": "https://www.apec.org/-/media/APEC/Publications/2005/12/APEC-Privacy-Framework/05_ecsg_privacyframewk.pdf",
        "Year": "2015",
        "Categories": {}
      },
      "AU Malabo Convention (2014)": {
        "Title": "AU Malabo Convention",
        "Link": "https://www.sbs.ox.ac.uk/cybersecurity-capacity/system/files/African%20Union%20Convention%20on%20CyberSecurity%20%26%20Personal%20Data%20Protection_0.pdf",
        "Year": "2014",
        "Categories": {}
      },
      "ASEAN Framework on Personal Data Protection (2016)": {
        "Title": "ASEAN Framework on Personal Data Protection",
        "Link": "https://asean.org/storage/2012/05/10-ASEAN-Framework-on-PDP.pdf",
        "Year": "2016",
        "Categories": {}
      },
      "OAS Principles on Privacy and Data Protection (2015)": {
        "Title": "OAS Principles on Privacy and Data Protection",
        "Link": "https://www.oas.org/en/sla/dil/docs/cji-doc_474-15_rev2.pdf",
        "Year": "2015",
        "Categories": {}
      },
      "UN Personal Data Protection and Privacy Principles (2018)": {
        "Title": "UN Personal Data Protection and Privacy Principles",
        "Link": "https://www.unsceb.org/CEBPublicFiles/UN-Principles-on-Personal-Data-Protection-Privacy-2018.pdf",
        "Year": "2018",
        "Categories": {}
      },
      "IAS": {
        "Title": "RIPD Data Protection Standards of the Ibero-American States",
        "Link": "https://iapp.org/media/pdf/resource_center/Ibero-Am_standards.pdf",
        "Year": "-",
        "Categories": {}
      },
      "Convention 108": {
        "Title": "CoE Convention 108+",
        "Link": "https://rm.coe.int/convention-108-convention-for-the-protection-of-individuals-with-regar/16808b36f1",
        "Year": "-",
        "Categories": {}
      },
      "Madrid Resolution": {
        "Title": "ICDPPC Madrid Resolution",
        "Link": "https://icdppc.org/wp-content/uploads/2015/02/The-Madrid-Resolution.pdf",
        "Year": "-",
        "Categories": {}
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
              categoryObj[k] = { "Abbreviated-Language": frameworkData[k] }
            } else if (Object.keys(categoryObj).includes(catKey)) {
              categoryObj[catKey]["Original-Language"] = frameworkData[k]
            }
          }
        }
        json[0][key]["Categories"] = categoryObj
      }
    }

    let consentJson = JSON.parse(principlesConsent)
    for (const frameworkData of consentJson) {
      let categoryObj = {}
      if (frameworkData.Framework === key) {
        for (const k of Object.keys(frameworkData)) {
          let catKey = k.split('--')[0]
          if (k !== "Framework") {
            if (!Object.keys(categoryObj).includes(catKey)) {
              categoryObj[k] = { "Abbreviated-Language": frameworkData[k] }
            } else if (Object.keys(categoryObj).includes(catKey)) {
              categoryObj[catKey]["Original-Language"] = frameworkData[k]
            }
          }
        }
        json[0][key]["Categories"] = { ...json[0][key]["Categories"], ...categoryObj }
      }
    }

    let rightsJson = JSON.parse(principlesIndividualRights)
    for (const frameworkData of rightsJson) {
      let categoryObj = {}
      if (frameworkData.Framework === key) {
        for (const k of Object.keys(frameworkData)) {
          let catKey = k.split('--')[0]
          if (k !== "Framework") {
            if (!Object.keys(categoryObj).includes(catKey)) {
              categoryObj[k] = { "Abbreviated-Language": frameworkData[k] }
            } else if (Object.keys(categoryObj).includes(catKey)) {
              categoryObj[catKey]["Original-Language"] = frameworkData[k]
            }
          }
        }
        json[0][key]["Categories"] = { ...json[0][key]["Categories"], ...categoryObj }
      }
    }

    let processingJson = JSON.parse(principlesLegitmateProcessing)
    for (const frameworkData of processingJson) {
      let categoryObj = {}
      if (frameworkData.Framework === key) {
        for (const k of Object.keys(frameworkData)) {
          let catKey = k.split('--')[0]
          if (k !== "Framework") {
            if (!Object.keys(categoryObj).includes(catKey)) {
              categoryObj[k] = { "Abbreviated-Language": frameworkData[k] }
            } else if (Object.keys(categoryObj).includes(catKey)) {
              categoryObj[catKey]["Original-Language"] = frameworkData[k]
            }
          }
        }
        json[0][key]["Categories"] = { ...json[0][key]["Categories"], ...categoryObj }
      }
    }

    let obligationJson = JSON.parse(principlesObligations)
    for (const frameworkData of obligationJson) {
      let categoryObj = {}
      if (frameworkData.Framework === key) {
        for (const k of Object.keys(frameworkData)) {
          let catKey = k.split('--')[0]
          if (k !== "Framework") {
            if (!Object.keys(categoryObj).includes(catKey)) {
              categoryObj[k] = { "Abbreviated-Language": frameworkData[k] }
            } else if (Object.keys(categoryObj).includes(catKey)) {
              categoryObj[catKey]["Original-Language"] = frameworkData[k]
            }
          }
        }
        json[0][key]["Categories"] = { ...json[0][key]["Categories"], ...categoryObj }
      }
    }

  }

  fs.writeFile("../src/json/framework_database.json", JSON.stringify(json), function (err) {
    if (err) {
      return console.log(err);
    }
  });

}
