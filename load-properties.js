async function loadProperties() {
  try {
    const response = await fetch('/_properties/index.json');
    if (!response.ok) return;
    const properties = await response.json();
    if (properties && properties.length > 0) {
      window.CMS_PROPS = properties;
    }
  } catch(e) {
    console.log('Using default properties');
  }
}
loadProperties();
