import "./Task.css";
import { Input} from "../Input/Input";
import { Checkbox } from "../Checkbox/Checkbox";
import { CategoryList } from "../Data/CategoryList";
import { CategoryDot } from "../CategoryDot/CategoryDot";
import { Delete } from "../Delete/Delete";

export const Task = ({ done, text, category, updateList, index, deleteTask, id, isEditing }) => {
    const currentCategory = CategoryList.find((categoryItem)=>categoryItem.id === category);
    const handleState = (checked) => {
        updateList(index, "done", checked);
    };
    const handleText = (text) => {
        updateList(index, "text", text);
    }
    const handleDelete = () => {
        deleteTask(id);
    };

return (
    <div className="task">
        <div className="task__action">
        <div className={`task__action-item ${isEditing && "task__action-item--flipped"}`}>
            <Checkbox done={done} handleState={handleState} />
        </div>
            <div className={`task__action-item-back ${isEditing && "task__action-item-back--flipped"}`}>
                <Delete onClick={handleDelete} />
            </div>
        </div>
        <div className="task__input">
        <Input text={text} handleText={handleText} />
        </div>
        <div className="task__category">{currentCategory && <CategoryDot color={currentCategory.color} />}</div>
    </div>
    );
};