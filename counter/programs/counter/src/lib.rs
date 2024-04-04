use anchor_lang::prelude::*;

declare_id!("B5s9QSxi3oVqux9y6cu1QbFrymN2gbJhGfdS7DzpcFfG");

#[program]
pub mod counter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
