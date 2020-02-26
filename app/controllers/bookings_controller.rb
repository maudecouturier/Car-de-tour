class BookingsController < ApplicationController
  before_action :set_booking, only: %i(show edit update destroy)

  def index
    @bookings = policy_scope(Booking)
    authorize @bookings

  end

  def show
    authorize @booking
  end

  def new
    @booking = Booking.new
    authorize @booking
    # @booking = Booking.geocoded # returns flats with coordinates

    @marker = {
        lat: 48.864930,
        lng: 2.380070
    }
  end

  def create
    @booking = Booking.new(booking_params)
    @student = current_user
    @booking.student = @student
    if @booking.save
      redirect_to bookings_path
    else
      render :new
    end
    authorize @booking
  end

  def edit
    authorize @booking
  end

  def update
    if @booking.update(booking_params)
      redirect_to bookings_path
    else
      render :new
    end
    authorize @booking
  end

  def destroy
    @booking.destroy
    authorize @booking
    redirect_to bookings_path
  end

  private

  def booking_params
    params.require(:booking).permit(:teacher_id, :slot)
  end

  def set_booking
    @booking = Booking.find(params[:id])
  end

end
