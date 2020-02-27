class BookingPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.where(student: user)
    end
  end

  def index?
    true
  end

  def show?
    true
  end

  def dashboard?
    true
  end

  def new?
    true
  end

  def create?
    true
  end

  def edit?
    true
  end

  def update?
    true
  end

  def destroy?
    true
  end

end
