import { useContext } from "react";
import { StoreContext } from "./StoreProvider";

export function useCommentsStore() {
  const rootStore = useContext(StoreContext);

  if (!rootStore) {
    throw new Error(
      "Nie znaleziono RootStore, sprawdź czy masz provider który go dostarcza"
    );
  }

  return rootStore.commentsStore;
}
