import React, { useState } from 'react';
import axios from 'axios';
import '../questions.css';

const Questions = () => {
  const categories = [
    'Datos personales',
    'Datos fisiológicos-patológicos',
    'Hábitos',
    'Cuestiones Generales',
    'Comida',
    'Entrenamiento',
    'Descripción del Caso',
    'Datos de Interés Adicional',
  ];

  // Estado para la categoría actual
  const [currentCategory, setCurrentCategory] = useState(0);

  // Estado para almacenar respuestas por categoría
  const [answers, setAnswers] = useState({
    personalData: {},
    physiologicalPathological: {},
    habits: {},
    generalQuestions: {},
    food: {},
    training: {},
    caseDescription: {},
    additionalInfo: {}
  });

  const handleAnswerChange = (question, value) => {
    // Copiamos las respuestas actuales de la categoría actual y actualizamos la nueva respuesta
    const categoryKey = getCategoryKey(currentCategory); // Función para obtener el key
    setAnswers({
      ...answers,
      [categoryKey]: {
        ...answers[categoryKey],
        [question]: value
      }
    });
  };

  // Función para obtener el nombre del objeto de cada categoría según el índice
  const getCategoryKey = (index) => {
    switch(index) {
      case 0: return 'personalData';
      case 1: return 'physiologicalPathological';
      case 2: return 'habits';
      case 3: return 'generalQuestions';
      case 4: return 'food';
      case 5: return 'training';
      case 6: return 'caseDescription';
      case 7: return 'additionalInfo';
      default: return '';
    }
  };

  const handleNext = async () => {
    const currentCategoryName = categories[currentCategory];
    const categoryKey = getCategoryKey(currentCategory);

    try {
      // Enviar respuestas de la categoría actual al backend
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/first-login-answers`, {
        category: currentCategoryName,
        answers: answers[categoryKey], // Solo enviamos respuestas de la categoría actual
      });

      // Pasar a la siguiente categoría
      if (currentCategory < categories.length - 1) {
        setCurrentCategory(currentCategory + 1);
      } else {
        // Redirigir al perfil cuando se haya completado todo
        window.location.href = '/profile';
      }
    } catch (error) {
      console.error('Error al enviar las respuestas:', error);
    }
  };

  return (
    <div className='container'>
      <h2>{categories[currentCategory]}</h2>
      <div>
        {/* Datos personales */}
        {currentCategory === 0 && (
          <>
            <label>Fecha de nacimiento:</label>
            <input
              type="date"
              value={answers.personalData.birthDate || ''}
              onChange={(e) => handleAnswerChange('birthDate', e.target.value)}
            />
            <label>Altura (cm):</label>
            <input
              type="number"
              value={answers.personalData.height || ''}
              onChange={(e) => handleAnswerChange('height', e.target.value)}
            />
            <label>Peso (kg):</label>
            <input
              type="number"
              value={answers.personalData.weight || ''}
              onChange={(e) => handleAnswerChange('weight', e.target.value)}
            />
          </>
        )}

        {/* Datos fisiológicos-patológicos */}
        {currentCategory === 1 && (
          <>
            <label>Estado de forma a lo largo de tu vida:</label>
            <textarea
              value={answers.physiologicalPathological.fitnessStatus || ''}
              onChange={(e) => handleAnswerChange('fitnessStatus', e.target.value)}
            />
            <label>Enfermedades actuales:</label>
            <textarea
              value={answers.physiologicalPathological.currentDiseases || ''}
              onChange={(e) => handleAnswerChange('currentDiseases', e.target.value)}
            />
            <label>Medicación:</label>
            <textarea
              value={answers.physiologicalPathological.medication || ''}
              onChange={(e) => handleAnswerChange('medication', e.target.value)}
            />
            <label>Enfermedades relevantes pasadas:</label>
            <textarea
              value={answers.physiologicalPathological.pastDiseases || ''}
              onChange={(e) => handleAnswerChange('pastDiseases', e.target.value)}
            />
            <label>Alergias o intolerancias alimentarias:</label>
            <textarea
              value={answers.physiologicalPathological.allergies || ''}
              onChange={(e) => handleAnswerChange('allergies', e.target.value)}
            />
            <label>Operaciones:</label>
            <textarea
              value={answers.physiologicalPathological.surgeries || ''}
              onChange={(e) => handleAnswerChange('surgeries', e.target.value)}
            />
            <label>Dolores o molestias habituales:</label>
            <textarea
              value={answers.physiologicalPathological.habitualPains || ''}
              onChange={(e) => handleAnswerChange('habitualPains', e.target.value)}
            />
            <label>¿Cuándo fue tu última analítica?</label>
            <textarea
              value={answers.physiologicalPathological.lastAnalysis || ''}
              onChange={(e) => handleAnswerChange('lastAnalysis', e.target.value)}
            />
            <label>¿Alguna alteración clínica a tener en cuenta?</label>
            <textarea
              value={answers.physiologicalPathological.clinicalAlterations || ''}
              onChange={(e) => handleAnswerChange('clinicalAlterations', e.target.value)}
            />
          </>
        )}

        {/* Hábitos */}
        {currentCategory === 2 && (
          <>
            <label>Cuéntame con detalle tus comidas diarias y horas:</label>
            <textarea
              onChange={(e) => handleAnswerChange('mealSchedule', e.target.value)}
            />
            <label>Tipo de alimentos que más consumes:</label>
            <textarea
              onChange={(e) => handleAnswerChange('preferredFoods', e.target.value)}
            />
            <label>Cuéntame una semana normal:</label>
            <textarea
              onChange={(e) => handleAnswerChange('typicalWeek', e.target.value)}
            />
            <label>¿Cuántas veces comes comida basura?</label>
            <input
              type="number"
              onChange={(e) => handleAnswerChange('junkFoodCount', e.target.value)}
            />
            <label>Fuerza de voluntad para seguir un programa dietético (1-10):</label>
            <input
              type="number"
              onChange={(e) => handleAnswerChange('willingnessToFollowDiet', e.target.value)}
            />
            <label>¿Fumas?</label>
            <textarea
              onChange={(e) => handleAnswerChange('smoking', e.target.value)}
            />
            <label>Hábitos de alcohol:</label>
            <textarea
              onChange={(e) => handleAnswerChange('alcoholHabits', e.target.value)}
            />
            <label>Horas de sueño:</label>
            <input
              type="number"
              onChange={(e) => handleAnswerChange('sleepHours', e.target.value)}
            />
          </>
        )}

        {/* Cuestiones Generales */}
        {currentCategory === 3 && (
          <>
            <label>Dietas pasadas: ¿Qué problemas has tenido?</label>
            <textarea
              onChange={(e) => handleAnswerChange('pastDiets', e.target.value)}
            />
            <label>Objetivos a medio y largo plazo:</label>
            <textarea
              onChange={(e) => handleAnswerChange('mediumLongTermGoals', e.target.value)}
            />
            <label>¿Has tomado química? ¿Cuándo fue la última vez?</label>
            <textarea
              onChange={(e) => handleAnswerChange('pastChemicalUse', e.target.value)}
            />
          </>
        )}

        {/* Comida */}
        {currentCategory === 4 && (
          <>
            <label>Comidas favoritas y momentos de mayor hambre:</label>
            <textarea
              onChange={(e) => handleAnswerChange('favoriteMeals', e.target.value)}
            />
            <label>¿Pesa la comida?</label>
            <input
              type="checkbox"
              onChange={(e) => handleAnswerChange('weighsFood', e.target.checked)}
            />
            <label>Alimentos que no te gustan:</label>
            <textarea
              onChange={(e) => handleAnswerChange('dislikedFoods', e.target.value)}
            />
            <label>Alimentos favoritos (fit y fat):</label>
            <textarea
              onChange={(e) => handleAnswerChange('favoriteFitFoods', e.target.value)}
            />
            <textarea
              onChange={(e) => handleAnswerChange('favoriteFatFoods', e.target.value)}
            />
          </>
        )}

        {/* Entrenamiento */}
        {currentCategory === 5 && (
          <>
            <label>Días de entrenamiento por semana:</label>
            <input
              type="number"
              onChange={(e) => handleAnswerChange('trainingDays', e.target.value)}
            />
            <label>Duración del entrenamiento (minutos):</label>
            <input
              type="number"
              onChange={(e) => handleAnswerChange('trainingDuration', e.target.value)}
            />
            <label>Estructura del entrenamiento:</label>
            <textarea
              onChange={(e) => handleAnswerChange('trainingStructure', e.target.value)}
            />
            <label>Horario de entrenamiento:</label>
            <input
              type="time"
              onChange={(e) => handleAnswerChange('trainingTime', e.target.value)}
            />
            <label>¿Disfrutas entrenando?</label>
            <input
              type="checkbox"
              onChange={(e) => handleAnswerChange('enjoysTraining', e.target.checked)}
            />
            <label>Ejercicios favoritos y más odiados:</label>
            <textarea
              onChange={(e) => handleAnswerChange('favoriteExercises', e.target.value)}
            />
            <textarea
              onChange={(e) => handleAnswerChange('dislikedExercises', e.target.value)}
            />
          </>
        )}

        {/* Descripción del Caso */}
        {currentCategory === 6 && (
          <>
            <label>Estado de ánimo actual (1-10):</label>
            <input
              type="number"
              onChange={(e) => handleAnswerChange('currentMood', e.target.value)}
            />
            <label>Autoestima (1-10):</label>
            <input
              type="number"
              onChange={(e) => handleAnswerChange('selfEsteem', e.target.value)}
            />
            <label>Imagen corporal (1-10):</label>
            <input
              type="number"
              onChange={(e) => handleAnswerChange('bodyImage', e.target.value)}
            />
            <label>Motivación principal para cambiar:</label>
            <textarea
              onChange={(e) => handleAnswerChange('mainMotivationForChange', e.target.value)}
            />
          </>
        )}

        {/* Datos de Interés Adicional */}
        {currentCategory === 7 && (
          <>
            <label>¿Algo más que quieras añadir sobre tu caso?</label>
            <textarea
              onChange={(e) => handleAnswerChange('additionalInfo', e.target.value)}
            />
          </>
        )}
      </div>
      <button onClick={handleNext}>Siguiente</button>

      {/* Barra de progreso */}
      <progress value={(currentCategory + 1) / categories.length * 100} max="100">
        {((currentCategory + 1) / categories.length) * 100}%
      </progress>
    </div>
  );
};

export default Questions;
