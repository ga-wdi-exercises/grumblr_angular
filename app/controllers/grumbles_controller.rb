class GrumblesController < ApplicationController
  before_action :set_grumble, only: [:show, :edit, :update, :destroy]

  # GET /grumbles
  # GET /grumbles.json
  def index
    @grumbles = Grumble.all
  end

  # GET /grumbles/1
  # GET /grumbles/1.json
  def show
  end

  # GET /grumbles/new
  def new
    @grumble = Grumble.new
  end

  # GET /grumbles/1/edit
  def edit
  end

  # POST /grumbles
  # POST /grumbles.json
  def create
    @grumble = Grumble.new(grumble_params)

    respond_to do |format|
      if @grumble.save
        format.html { redirect_to @grumble, notice: 'Grumble was successfully created.' }
        format.json { render :show, status: :created, location: @grumble }
      else
        format.html { render :new }
        format.json { render json: @grumble.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /grumbles/1
  # PATCH/PUT /grumbles/1.json
  def update
    respond_to do |format|
      if @grumble.update(grumble_params)
        format.html { redirect_to @grumble, notice: 'Grumble was successfully updated.' }
        format.json { render :show, status: :ok, location: @grumble }
      else
        format.html { render :edit }
        format.json { render json: @grumble.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /grumbles/1
  # DELETE /grumbles/1.json
  def destroy
    @grumble.destroy
    respond_to do |format|
      format.html { redirect_to grumbles_url, notice: 'Grumble was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_grumble
      @grumble = Grumble.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def grumble_params
      params.require(:grumble).permit(:authorName, :content, :title, :photoUrl)
    end
end
