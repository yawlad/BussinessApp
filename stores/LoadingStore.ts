import { makeAutoObservable } from "mobx";

class LoadingStore {
  isLoading: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
  getIsLoading() {
    return this.isLoading;
  }
}

const loadingStore = new LoadingStore();

export default loadingStore;
