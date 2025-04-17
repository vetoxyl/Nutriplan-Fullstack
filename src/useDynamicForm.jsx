import { useState } from 'react';

export const useDynamicForm = (initialValues = {}) => {
  const [formData, setFormData] = useState(initialValues);

  const handleMultiSelect = ({ key, item, limit = Infinity }) => {
    setFormData((prev) => {
      const current = prev[key] || [];
      const isSelected = current.includes(item);

      if (isSelected) {
        return { ...prev, [key]: current.filter((i) => i !== item) };
      } else if (current.length < limit) {
        return { ...prev, [key]: [...current, item] };
      } else {
        return prev;
      }
    });
  };

  const handleToggleSelect = ({ key, item, clearKeyIf = null }) => {
    setFormData((prev) => {
      const current = prev[key] || [];
      const isSelected = current.includes(item);
      const updatedList = isSelected
        ? current.filter((i) => i !== item)
        : [...current, item];

      const newState = { ...prev, [key]: updatedList };

      if (clearKeyIf && item === clearKeyIf && isSelected) {
        newState[clearKeyIf] = '';
      }

      return newState;
    });
  };

  const handleInputChange = ({ key, value }) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return {
    formData,
    handleMultiSelect,
    handleToggleSelect,
    handleInputChange,
  };
};
