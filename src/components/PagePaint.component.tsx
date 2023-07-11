import CanvasComponent from '../components/Canvas.component';
import FolderComponent from '../components/Folder.component';
import style from '../styles/folders.module.scss'

const PagePaint = () => {

  return (
    <div className={style.folder}>
      <FolderComponent />
      <CanvasComponent />
    </div>
  );
};

export default PagePaint;
