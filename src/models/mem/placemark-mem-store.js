import { v4 } from "uuid";
import { landmarkMemStore } from "./landmark-mem-store.js";

let placemarks = [];

export const placemarkMemStore = {
  async getAllPlacemarks() {
    return playlists;
  },

  async addPlacemark(placemark) {
    placemark._id = v4();
    placemarks.push(placemark);
    return placemark;
  },

  async getPlacemarkById(id) {
    const list = placemarks.find((placemark) => placemark._id === id);
    if (list) {
      list.landmarks = await landmarkMemStore.getLandmarksByPlacemarkId(list._id);
      return list;
    }
    return null;
  },

  async getUserPlacemarks(userid) {
    return placemarks.filter((placemark) => placemark.userid === userid);
  },

  async deletePlacemarkById(id) {
    const index = placemarks.findIndex((placemark) => placemark._id === id);
    if (index !== -1) placemarks.splice(index, 1);
  },

  async deleteAllPlacemarks() {
    placemarks = [];
  },
};
