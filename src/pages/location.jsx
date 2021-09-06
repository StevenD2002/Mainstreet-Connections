export function Location() {
  const windowSize = window.innerWidth;
  const setMapSize = () => {
    if (windowSize >= 1250) {
      return windowSize / 2.5;
    } else {
      return windowSize - 20;
    }
  };
  console.log(windowSize);
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.9482960468351!2d-88.8136666666161!3d35.61266338892165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887ea0f19017bedf%3A0xbb90198e83152b04!2s519%20E%20Chester%20St%2C%20Jackson%2C%20TN%2038301!5e0!3m2!1sen!2sus!4v1626212126036!5m2!1sen!2sus"
        width="500"
        height="500"
        allowfullscreen=""
        style={{ width: `${setMapSize()}px`, margin: "10px 0px" }}
        loading="lazy"
        title="map"
      ></iframe>
    </div>
  );
}
