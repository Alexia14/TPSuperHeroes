class City {
  constructor(name, longitude, latitude) {
    this.name_ = name || 'UNKNOWNCITY';
    this.longitude_ = longitude;
    this.latitude_ = latitude;
  }

  get name() {
    return this.name_;
  }

  get longitude() {
    return this.longitude_;
  }

  get latitude() {
    return this.latitude_;
  }

  get localization() {
    return {longitude: this.longitude_, latitude: this.latitude_};
  }
}

module.exports = {City};
