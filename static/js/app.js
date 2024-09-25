// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log(data);  
    // Extract metadata for the sample
    let metadata = data.metadata.filter(sampleObj => sampleObj.id == sample)[0];
    console.log(metadata);  // Log the filtered metadata for debugging
    
    // Ensure that metadata is present
    if (metadata) {
      let panel = d3.select("#sample-metadata");
      
      // Clear any existing metadata
      panel.html("");
      
      // Add each key-value pair from the metadata
      Object.entries(metadata).forEach(([key, value]) => {
        panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    }
  }).catch(error => console.error("Error loading metadata:", error));
}

function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let sampleNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let selector = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < sampleNames.length; i++){
      selector
        .append("option")
        .text(sampleNames[i])
        .property("value", sampleNames[i]);
    };

    // Get the first sample from the list
    let firstSample = sampleNames[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  
  buildMetadata(newSample);
}

// Initialize the dashboard
init();



// function to build both charts
// function buildCharts(sample) {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the samples field


//     // Filter the samples for the object with the desired sample number


//     // Get the otu_ids, otu_labels, and sample_values


//     // Build a Bubble Chart


//     // Render the Bubble Chart


//     // For the Bar Chart, map the otu_ids to a list of strings for your yticks


//     // Build a Bar Chart
//     // Don't forget to slice and reverse the input data appropriately


//     // Render the Bar Chart

//   });
// }

// // Function to run on page load
// function init() {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the names field


//     // Use d3 to select the dropdown with id of `#selDataset`


//     // Use the list of sample names to populate the select options
//     // Hint: Inside a loop, you will need to use d3 to append a new
//     // option for each sample name.


//     // Get the first sample from the list


//     // Build charts and metadata panel with the first sample

//   });
// }

// // Function for event listener
// function optionChanged(newSample) {
//   // Build charts and metadata panel each time a new sample is selected

// }

// // Initialize the dashboard
// init();
