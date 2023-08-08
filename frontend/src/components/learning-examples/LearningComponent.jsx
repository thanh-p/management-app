import FirstComponent from './FirstComponent'
import { SecondFirstComponent } from './FirstComponent';
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import LearningJavascript from './LearningJavascript'

export default function LearningComponent() {
  return (
    <div className="learningComponent">
      <FirstComponent />
      <SecondFirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <LearningJavascript />
    </div>
  );
}