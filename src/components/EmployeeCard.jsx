import React from 'react';

export default function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md border-2 border-[#e6a891] p-4 hover:shadow-lg transition-shadow">
      {/* Header with photo and name */}
      <div className="flex items-center gap-4 mb-4">
        {employee.photo_url ? (
          <img
            src={employee.photo_url}
            alt={employee.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#bc7676]"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#bc7676] flex items-center justify-center text-white text-2xl font-bold">
            {employee.name?.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">{employee.name}</h3>
          <p className="text-sm text-gray-600">{employee.designation || 'Employee'}</p>
        </div>
      </div>

      {/* Employee Details Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold">SSS</p>
          <p className="text-sm font-bold text-gray-800">₱{(employee.sss || 0).toLocaleString('en-PH')}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold">PAG-IBIG</p>
          <p className="text-sm font-bold text-gray-800">₱{(employee.pagibig || 0).toLocaleString('en-PH')}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold">PhilHealth</p>
          <p className="text-sm font-bold text-gray-800">₱{(employee.philhealth || 0).toLocaleString('en-PH')}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 font-semibold">Total Contributions</p>
          <p className="text-sm font-bold text-gray-800">
            ₱{((employee.sss || 0) + (employee.pagibig || 0) + (employee.philhealth || 0)).toLocaleString('en-PH')}
          </p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-xs text-blue-600 font-semibold">EE Share</p>
          <p className="text-sm font-bold text-blue-700">₱{(employee.eeshare || 0).toLocaleString('en-PH')}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-xs text-green-600 font-semibold">ER Share</p>
          <p className="text-sm font-bold text-green-700">₱{(employee.ershare || 0).toLocaleString('en-PH')}</p>
        </div>
      </div>

      {/* Action Buttons */}
      {onEdit && onDelete && (
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(employee)}
            className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-sm transition-all"
          >
            ✏️ Edit
          </button>
          <button
            onClick={() => onDelete(employee.id)}
            className="flex-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-sm transition-all"
          >
            🗑️ Delete
          </button>
        </div>
      )}
    </div>
  );
}
