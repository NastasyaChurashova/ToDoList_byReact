import "./EditButton.css";

export const EditButton = ({ onclick, isEditing }) => {
    return (
    <span className="edit-button" onclick={ onclick }>
        {!isEditing ? "Edit" : "Done"}
    </span>
    );
}