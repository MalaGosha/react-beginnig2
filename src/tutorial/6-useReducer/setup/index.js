import React, {useState, useReducer} from 'react';
import Modal from './Modal';
import {reducer} from './reducer';

// reducer FUNCTION!!!!!!!!!


const defaultState = {
    people: [], // gdy się wpisze data to odwołuje się do pliku data.js (o ile go zaimportujemy) i stąd pobiera dane a jeśli wpisze się [] to zacznie od pustej tablicy
    isModalOpen: false,
    modalContent: 'dodaj imię',
};

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault(); // anuluje zdarzenie, jeśli można je anulować, co oznacza, że domyślna akcja należąca do zdarzenia nie zostanie wykonana.

        if (name) {
            const newItem = {id: new Date().getTime().toString(), name};
            dispatch({type: 'ADD_ITEM', payload: newItem}) // wywołuje zmianę stanu
            setName('')
        } else {
            dispatch({type: 'NO_VALUE'});
        }
        // LUB MOŻNA ZAPISAĆ if one liner--> name ? dispatch({type: 'TESTING'}) : dispatch({type: 'RANDOM'});
    };

    const closeModal = () => {
        dispatch({type:'CLOSE_MODAL'});
    };

    return (
        <>
            {state.isModalOpen && (
                <Modal closeModal={closeModal} modalContent={state.modalContent}/>
            )}
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type='submit'> add</button>
            </form>
            {state.people.map((person) => {
                return (
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: person.id})}>
                            remove
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default Index;
