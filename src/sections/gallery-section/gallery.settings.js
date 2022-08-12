function importAll(r) {
    return r.keys().map(r);
  }
  
const galleryContent = importAll(require.context('./gallery-images', false, /\.(png|jpe?g|svg)$/));


export default galleryContent;