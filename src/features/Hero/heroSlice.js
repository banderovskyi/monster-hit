import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  damage: 10,
  attackSpeed: 3000,
};

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    increaseDamage: (state, action) => {
      state.damage += action.payload;
    },
    increaseAttackSpeed: (state, action) => {
      state.attackSpeed += action.payload;
    },
  },
});

export const { increaseDamage, increaseAttackSpeed } = heroSlice.actions;

export const selectDamage = (state) => state.hero.damage;
export const selectAttackSpeed = (state) => state.hero.attackSpeed;

export default heroSlice.reducer;
