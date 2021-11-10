import { useEffect, useState, useRef } from "react";
import Loading from "./components/Loader";
import s from "./App.module.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import ErrorView from "./components/Error/ErrorView";
import Modal from "./components/Modal";
import { getDataServer } from "./services/api";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState("");

  const isFirstRender = useRef(true);

  useEffect(() => {
    if ((query === "") & isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if ((query === "") & !isFirstRender.current) {
      return alert("Введите ключевое слово для поиска!)");
    }
    getPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const getQueryFromInput = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const getPictures = () => {
    setStatus(null);
    setIsLoading(true);

    getDataServer(query, page)
      .then((data) => {
        data.hits.length === 0
          ? setStatus("error")
          : setImages((prev) => [...prev, ...data.hits]);

        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const getItemfromClick = (largeImageUrl) => {
    setLargeImageUrl(largeImageUrl);
    toggleModal();
  };

  return (
    <div className={s.app}>
      <Searchbar onSubmit={getQueryFromInput} />

      {(error || status === "error") && <ErrorView />}

      <ImageGallery images={images} onModalshow={getItemfromClick} />

      {isLoading && <Loading />}

      {images.length >= 12 && !isLoading && (
        <Button onLoadMore={handleChangePage} />
      )}

      {modalShow && (
        <Modal largePic={largeImageUrl} toggleModal={toggleModal} />
      )}
    </div>
  );
}

export default App;
